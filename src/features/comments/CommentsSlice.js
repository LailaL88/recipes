// export const addComment = () => {
//     return {
//       type: 
//     }
// }

export function commentsReducer(reducerName = '') {
    return function comments(comments = [], action) {
      switch (action.type) {
        case `addComment_${reducerName}`:
          return [...comments, action.payload];
        default:
          return comments;
      }
    }
  }