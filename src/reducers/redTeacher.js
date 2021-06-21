import initialState from './initialState';

export default function redTeacher(state = initialState.teacher,action) {
    switch(action.type) {
       case 'TEACHER_DATA':
         return {
           ...state,
           teacherName:action.teacherName ,
           teacherSubject: action.teacherSubject,
           isCertified: action.isCertified,
           gradeLevel: action.gradeLevel
         };
         default:
          return state;
     }
  }