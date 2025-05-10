//http service write hare 


class HttpService {
      constructor() {
            this.service = axios.create({
                  baseURL: URL.BASE_URL,
                  headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                  },
            });

            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }
      sendRequest = async (config) => {
            return this.service.request(config);
      };
      handleSuccess = (response) => {
            return response?.data;
      };

      handleError = (error) => {
            if (!error.response) {
                  return {
                        success: false,
                        message: 'Network error. Please check your internet connection.',
                        data: null,
                  };
            }
            const status = error.response.status;
            const redirects = {
                  401: '/login',
                  //thare can add more err redirect pages
                  501: '/501',

            };

            if (redirects[status]) {
                  window.location.replace(redirects[status]);
            }

            return Promise.reject(error);

      };

}

export default HttpService;