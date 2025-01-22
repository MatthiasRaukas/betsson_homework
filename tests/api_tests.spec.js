import { test, expect } from '@playwright/test'

test('add a pet', async ({ request }) => {
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
        data: {
            "id": 0,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('doggie');
    console.log(await response.json());
});

test('place an order for the pet', async ({ request }) => {
    const response = await request.post('https://petstore.swagger.io/v2/store/order', {
        data: {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2025-01-22T18:09:29.160Z",
            "status": "placed",
            "complete": true
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('placed');
    console.log(await response.json());
});


test('all sold pets and caini one of them', async ({ request }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('doggie');
    console.log(await response.json());
});

test('retrieve a pet with invalid credentials', async({request}) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/123465');
    expect(response. status()).toBe(404);
    console.log(await response.json());
})
