import {FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE} from './actionTypes';
import axios from 'axios';
//import {mockCourses} from './mockCourses';

const apiUrl = 'https://polyteach-back.igpolytech.fr';

export const fetchCourse = () => {
  return function thunk(dispatch) {
    return axios
      .get(`${apiUrl}/courses`)
      .then(response => {
        dispatch(fetchCourseSuccess(mockCourses));
      })
      .catch(error => {
        dispatch(fetchCourseSuccess(mockCourses));
        //dispatch(fetchCourseFailure(error));
      });
  }
  thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true,
  };
  return thunk;
};

export const fetchCourseSuccess = courses => {
  return {
    type: FETCH_COURSE_SUCCESS,
    courses,
  };
};

export const fetchCourseFailure = error => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: {
      error,
    },
  };
};



const mockCourses = [
  {
      "courseId": 12,
      "courseName": "DevbfdqsfdqfdqsfbvxcOps",
      "courseDesc": "description 3",
      "courseImageLink": "https://static1.squarespace.com/static/559dc415e4b0fcb781ceca92/55b6c5f7e4b08c3f4b9f3f83/5c51551e4ae23755fa90f088/1548890390219/jason-leung-479251-unsplash.jpg?format=2500w"
  },
  {
      "courseId": 1,
      "courseName": "AWI",
      "courseDesc": "description",
      "courseImageLink": "https://i.ytimg.com/vi/WiTxwdGWLoY/maxresdefault.jpg"
  },
  {
      "courseId": 2,
      "courseName": "WI",
      "courseDesc": "description 2",
      "courseImageLink": "https://dyw7ncnq1en5l.cloudfront.net/optim/produits/450/49565/huawei-matebook-13_48d03b2c431078f0__450_400.jpg"
  },
  {
      "courseId": 4,
      "courseName": "qsdf",
      "courseDesc": "sqdf",
      "courseImageLink": "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg"
  },
  {
      "courseId": 5,
      "courseName": "TEST",
      "courseDesc": "vcxwvcxwvcxnfdqhdq",
      "courseImageLink": "https://storage.googleapis.com/polyteachpocvideos-bucket/Screenshot at Nov 16 23-52-08.png"
  },
  {
      "courseId": 6,
      "courseName": "vcxvwcxw",
      "courseDesc": "cvxwvxwvcxvwcxw",
      "courseImageLink": "https://storage.googleapis.com/polyteachpocvideos-bucket/iphoneX-WP.png"
  },
  {
      "courseId": 7,
      "courseName": null,
      "courseDesc": null,
      "courseImageLink": null
  }
]