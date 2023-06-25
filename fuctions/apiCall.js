module.exports = async function makeAPICall(api, value, headers, apiCallType) {
    let url = api;
    if (apiCallType === 'GET') {
      // Append query parameters to the URL
      const params = new URLSearchParams(value);
      url += '?' + params.toString();
    }
  
    // Create the options object based on the provided data
    const options = {
      method: apiCallType,
      headers: headers,
      body: apiCallType !== 'GET' ? JSON.stringify(value) : undefined,
    };
  
    // Make the API call using fetch()
    const response = await fetch(url, options);
  
    // Parse the response as JSON
    const data = await response.json();
  
    // Return the response data
    return data;
  }

