// import React, { useContext } from 'react';
// import { createGlobalStyle } from 'styled-components';
// import { normalize } from 'polished';
// import SearchContext from '../../providers/Search';

// function Input() {
//   console.log('useContext(SearchProvider)', useContext(SearchContext.Provider));
//   const { search } = useContext(SearchContext.Provider);
//   console.log('searchI', search);

//   const GlobalStyle = createGlobalStyle`
//   ${normalize()}
// `;

//   return (
//     <div>
//       <GlobalStyle />
//       <div id="inputSearch">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Add your Todo"
//           value={search}
//           required
//           onClick={(e) => setNewSearch(e.target.value)}
//         />
//       </div>
//       <button type="submit">
//         <span role="img" aria-label="author emoji">
//           🔍{' '}
//         </span>
//       </button>
//     </div>
//   );
// }

// export default Input;
