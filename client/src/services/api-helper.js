import axios from 'axios';

const baseUrl = "http://localhost:3000";

const api = axios.create({
    baseURL: baseUrl
});

export const logInUser = async (logInData) => {
    const resp = await api.post('/auth/login', logInData);
    localStorage.setItem("user_id", resp.data.user.id)
    localStorage.setItem('jwt', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
};

export const registerUser = async (registerData) => {
    console.log(registerData)
    const resp = await api.post('/users', { user: {registerData} });
    return resp.data;
};

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defailts.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/users/verify');
        return resp.data;
    }
    return false;
};

const readAllCourses = async () => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.get(`/users/${userId}/courses`);
    return resp.data;
};

const readOneCourse = async (course_id) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.get(`/users/${userId}/courses/${course_id}`);
    return resp.data;
};

const createCourse = async (course_data) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.post(`/users/${userId}/courses`, course_data);
    return resp.data;
};

const updateCourse = async (course_id, course_data) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.put(
        `/users/${userId}/courses/${course_id}/`,
        { course: course_data }
    );
    return resp.data;
};

const destroyCourse = async (course_id) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.delete(`/users/${userId}/courses/${course_id}`);
    return resp.data;
};

const readAllAssignments = async (course_id) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.get(`/users/${userId}/courses/${course_id}/assignments`);
    return resp.data;
};

const readOneAssignment = async (course_id, assignment_id) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.get(
        `/users/${userId}/courses/${course_id}/assignments/${assignment_id}`
    );
    return resp.data;
};

const createAssignment = async (course_id, assignment_data) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.post(
        `/users/${userId}/courses/${course_id}/assignments`,
        { assignment: assignment_data }
    );
    return resp.data;
};

const updateAssignment = async (course_id, assignment_id, assignment_data) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.put(
        `/users/${userId}/courses/${course_id}/assignments/${assignment_id}`,
        { assignment: assignment_data }
    );
    return resp.data;
};

const destroyAssignment = async (course_id, assignment_id) => {
    const userId = localStorage.getItem("user_id")
    const resp = await api.delete(
        `/users/${userId}/courses/${course_id}/assignments/${assignment_id}`
    );
    return resp.data;
};

export {
    readAllCourses,
    readOneCourse,
    createCourse,
    updateCourse,
    destroyCourse,
    readAllAssignments,
    readOneAssignment,
    createAssignment,
    updateAssignment,
    destroyAssignment
};