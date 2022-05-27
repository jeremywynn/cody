export default {
  // TODO: define mutation to store loan applications
  SET_LOAN_APPLICATIONS (state, payload) {
    state.allLoanApplications = payload;
  }
};
