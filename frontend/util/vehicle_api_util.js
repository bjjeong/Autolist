export const fetchVehicles = () => (
  $.ajax({
    method: 'GET',
    beforeSend: function (request) {
      request.setRequestHeader('x-api-key', 'cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90');
    },
    url: 'https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=1',
  })
);