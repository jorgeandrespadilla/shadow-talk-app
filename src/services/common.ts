import api from "../shared/api"

export const healthCheckAll = async () => {
  await api.get('/health-check-all');
}