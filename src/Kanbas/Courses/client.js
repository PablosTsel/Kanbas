import axios from "axios";

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  // const response = await axios.get("http://localhost:4000/api/courses");
  const response = await axios.get(process.env.REACT_APP_BASE_API_URL + '/api/courses')
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(process.env.REACT_APP_BASE_API_URL + `/api/courses/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(process.env.REACT_APP_BASE_API_URL + `/api/courses/${id}`
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    process.env.REACT_APP_BASE_API_URL + `/api/courses/${course._id}`,
    course
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(process.env.REACT_APP_BASE_API_URL + '/api/courses',
    course
  );
  return response.data;
};