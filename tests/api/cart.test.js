import cart from "../../pages/api/cart";

test("calculates order total", () => {
  const req = {
    body: JSON.stringify({
      discount: 0.2,
      tax: 0.06,
      items: [
        {
          id: 1,
          price: 19.99,
          quantity: 2
        },
        {
          id: 2,
          price: 43.49,
          quantity: 1
        }
      ]
    })
  };

  const json = jest.fn();

  const status = jest.fn(() => {
    return { json };
  });

  const res = {
    status
  };

  cart(req, res);

  expect(json.mock.calls[0][0].total).toEqual(70.78255999999999);
});
