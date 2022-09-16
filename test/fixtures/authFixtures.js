export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: 'authenticated',
  uid: 'A123',
  email: 'danilo@algo.cl',
  displayName: 'Demo user',
  photoURL: 'http://no_image.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: 'A123',
  email: 'danilo@algo.cl',
  displayName: 'Demo user',
  photoURL: ' http://no_image.jpg',
};
