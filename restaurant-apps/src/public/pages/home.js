import RestaurantSource from '../globals/restaurant-source';

const home = {
  async render() {
    return `
      <main id="main-content" tabindex="1">
          <section class="content">
              <div class="latest">
                  <h1>Explore Restaurant</h1>
              </div>
              <div class="card-list"></div>
          </section>
      </main>
    `;
  },

  async afterRender() {
    const containerClassList = document.querySelector('.card-list');
    try {
      const restaurants = await RestaurantSource.listRestaurant();
      restaurants.forEach((restaurant) => {
        const {
          name, pictureId, city, id,
        } = restaurant;
        const restaurantElement = document.createElement('div');
        restaurantElement.classList.add('containerCard');
        restaurantElement.innerHTML = `
          <img src="${RestaurantSource.getMediumImageUrl(pictureId)}" alt="${name}">
          <div class="container">
            <h1><a href="#/detail/${id}" data-id="${id}">${name}</a></h1>
            <h1>${city}</h1>
          </div>
        `;
        restaurantElement.querySelector('a').addEventListener('click', (event) => {
          event.preventDefault();
          const clickedId = event.target.getAttribute('data-id');
          window.location.hash = `/detail/${clickedId}`;
        });
        containerClassList.appendChild(restaurantElement);
      });
    } catch (error) {
      console.log('Error:', error);
      containerClassList.innerHTML = 'Failed to fetch restaurant data.';
    }
  },
};

export default home;
