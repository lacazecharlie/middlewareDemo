/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */

/* **************************************** */
/* ********        MIDDLEWARE      ******** */
/* **************************************** */
const logger = ({ getState }) => next => action => {
  next(action);

  console.group(`${action.type}`);
  console.group("CURRENT STATE:");
  console.log(getState());
  console.groupEnd();
  next(action);
  console.group("NEXT STATE: ");
  console.log(getState());
  console.groupEnd();
  console.groupEnd();
};

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default [logger];
