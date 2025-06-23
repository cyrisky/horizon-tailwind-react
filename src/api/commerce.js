import axios from 'axios'

export async function getProducts (params, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    if (params) {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/product?' + params, headers)
    } else {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/product', headers)
    }
  } catch (error) {
    return {
      error: {
        status: error.response.status,
        message: error.message
      }
    }
  }
}

export async function getProduct (id, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + id, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function createProduct (data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.post(process.env.baseUrl + '/api/mst/commerce/product', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function updateProduct (data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.put(process.env.baseUrl + '/api/mst/commerce/product', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function getPackages (id, params, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    if (params) {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package?' + params, headers)
    } else {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package', headers)
    }
  } catch (error) {
    return {
      error: {
        status: error.response.status,
        message: error.message
      }
    }
  }
}

export async function getPackage (productId, packageId, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + productId + '/package/' + packageId, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function createPackage (id, data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.post(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function updatePackage (id, data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.put(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function deletePackage (productId, packageId, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.delete(process.env.baseUrl + '/api/mst/commerce/product/' + productId + '/package/' + packageId, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function getOrders (params, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    if (params) {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/order?' + params, headers)
    } else {
      return await axios.get(process.env.baseUrl + '/api/mst/commerce/order', headers)
    }
  } catch (error) {
    return {
      error: {
        status: error.response.status,
        message: error.message
      }
    }
  }
}

export async function getOrder (id, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.get(process.env.baseUrl + '/api/mst/commerce/order/' + id, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function getQuizTemplate (id, pId, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package/' + pId + '/quiz', headers)
  } catch (error) {
    return {
      error: {
        status: error.response.status,
        message: error.message
      }
    }
  }
}

export async function getSingleQuizTemplate (id, pId, mappingId, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.get(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package/' + pId + '/quiz/' + mappingId, headers)
  } catch (error) {
    return {
      error: {
        status: error.response.status,
        message: error.message
      }
    }
  }
}

export async function createQuizTemplate (id, pId, data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.post(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package/' + pId + '/quiz', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function updateQuizTemplate (id, pId, data, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.put(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package/' + pId + '/quiz', data, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}

export async function deleteQuizTemplate (id, pId, mappingId, token) {
  const headers = {
    headers: {
      Authorization: token
    }
  }

  try {
    return await axios.delete(process.env.baseUrl + '/api/mst/commerce/product/' + id + '/package/' + pId + '/quiz/' + mappingId, headers)
  } catch (error) {
    return {
      error: {
        message: error.message
      }
    }
  }
}
