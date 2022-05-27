import axios from 'axios';

export default {
  loadLoanApplications: async ({ commit }) => {
    // TODO: make a GET request
    try {
      const { data: { data: { applications } } } = await axios.get('https://6271819ac455a64564b41998.mockapi.io/api/v3/applications');
      commit('SET_LOAN_APPLICATIONS', applications);
    } catch (err) {
      console.log(err);
    }
  }
};
