/// <reference types="cypress" />


describe('API Testing', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; //Make url to variable

  // Test: Make a successful GET request
  it('should make a successful GET request', () => {
    cy.request('GET', apiUrl)
      .then((response) => {
        // Assertions on the response
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
  });

  // Test: Make a successful POST request
  it('should make a successful POST request', () => {
    const postData = {
      title: 'Cypress POST Test',
      body: 'This is a test post created with Cypress.',
      userId: 1,
    };

    cy.request('POST', apiUrl, postData)
      .then((response) => {
        // Assertions on the response
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq(postData.title);
      });
  });

  // Test: Make a successful PUT request
  it('should make a successful PUT request', () => {
    const putData = {
      title: 'Cypress PUT Test',
      body: 'This is a test put request with Cypress.',
      userId: 1,
    };

    cy.request({
      method: 'PUT',
      url: `${apiUrl}/1`,
      body: putData,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(putData.title);
    });
  });

  // Test: Make a successful PATCH request
  it('should make a successful PATCH request', () => {
    const patchData = {
      title: 'Cypress PATCH Test',
    };

    cy.request({
      method: 'PATCH',
      url: `${apiUrl}/1`,
      body: patchData,
    }).then((response) => {
      // Assertions on the response
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(patchData.title);
    });
  });

  // Test: Make a successful DELETE request
  it('should make a successful DELETE request', () => {
    cy.request('DELETE', `${apiUrl}/1`)
      .then((response) => {
        // Assertions on the response
        expect(response.status).to.eq(200);
      });
  });
});
