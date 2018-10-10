export const fetchVehicles = (min, max, page) => (
  $.ajax({
    method: 'GET',
    beforeSend: function (request) {
      request.setRequestHeader('x-api-key', 'cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90');
    },
    url: `https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=${page}${min ? `&price_min=${min}` : ''}${max ? `&price_max=${max}` : ''}`,
  })
);

export const fetchViews = () => (
  $.ajax({
    method: 'GET'
  })
)