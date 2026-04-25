import Dexie from 'dexie';

export const db = new Dexie('GuroKoDB');

db.version(1).stores({
  lessons: '++id, title, gradeLevel, subject, language, createdAt, synced',
  quizzes: '++id, lessonId, title, createdAt, synced',
  submissions: '++id, studentId, lessonId, quizId, status, createdAt, synced',
  settings: 'key, value'
});

export const saveLessonLocally = async (lesson) => {
  return await db.lessons.add({
    ...lesson,
    createdAt: new Date().toISOString(),
    synced: 0
  });
};

export const getLocalLessons = async () => {
  return await db.lessons.toArray();
};

export const saveSubmissionLocally = async (submission) => {
  return await db.submissions.add({
    ...submission,
    status: 'pending',
    createdAt: new Date().toISOString(),
    synced: 0
  });
};

export const getPendingSubmissions = async () => {
  return await db.submissions.where('synced').equals(0).toArray();
};

export const markAsSynced = async (table, id) => {
  return await db[table].update(id, { synced: 1 });
};
