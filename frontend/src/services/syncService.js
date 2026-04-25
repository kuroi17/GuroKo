import { supabase } from './supabaseClient';
import { getPendingSubmissions, markAsSynced, db } from './offlineDB';

export const syncData = async () => {
  if (!navigator.onLine) return;

  console.log("🔄 Syncing data...");

  // 1. Sync Pending Submissions
  const pendingSubmissions = await getPendingSubmissions();
  for (const sub of pendingSubmissions) {
    try {
      const { data, error } = await supabase
        .from('submissions')
        .insert([{
          student_id: sub.studentId,
          lesson_id: sub.lessonId,
          quiz_id: sub.quizId,
          data: sub.data,
          created_at: sub.createdAt
        }]);

      if (!error) {
        await markAsSynced('submissions', sub.id);
      }
    } catch (err) {
      console.error("Sync error for submission", sub.id, err);
    }
  }

  // 2. Sync Locally Generated Lessons (Optional: Usually teachers are online when generating)
  const unsyncedLessons = await db.lessons.where('synced').equals(0).toArray();
  for (const lesson of unsyncedLessons) {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .insert([{
          title: lesson.title,
          grade_level: lesson.gradeLevel,
          subject: lesson.subject,
          topic: lesson.topic,
          content: lesson.lesson,
          objectives: lesson.objectives,
          quiz_data: lesson.quiz,
          created_at: lesson.createdAt
        }]);

      if (!error) {
        await markAsSynced('lessons', lesson.id);
      }
    } catch (err) {
      console.error("Sync error for lesson", lesson.id, err);
    }
  }
};

// Listen for online status
window.addEventListener('online', syncData);

// Periodically check (every 5 mins)
setInterval(syncData, 5 * 60 * 1000);
