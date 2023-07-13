import restaurantSource from '../globals/restaurant-source';
import UrlParser from '../routes/url-parser';

const detail = {
  async render() {
    return `
        <div class="card-detail"></div>
    `;
  },

  async afterRender() {
    const containerCardDetail = document.querySelector('.card-detail');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantDetail = await restaurantSource.restoDetail(url.id);
      const { foods, drinks } = restaurantDetail.menus;
      const { customerReviews } = restaurantDetail;

      /* food */
      const foodList = foods
        .map((food) => `<li>${food.name}</li>`)
        .join('');

      /* drink */
      const drinkList = drinks
        .map((drink) => `<li>${drink.name}</li>`)
        .join('');

      /* Customer Review */
      const customerReviewsList = customerReviews
        .map((review) => `
          <div class="review-item">
          <ul>
            <li><h2><b>${review.name}</b></h2></li>
            <h3> Review </h3>
            <li>${review.review}</li>
            <li>Date: ${review.date}</li>
          <ul>
          </div>
        `)
        .join('');

      containerCardDetail.innerHTML = `
      <center>
       <img src="${restaurantSource.getMediumImageUrl(restaurantDetail.pictureId)}" alt="${restaurantDetail.name}" >
       </center>
        <h1>${restaurantDetail.name}</h1>
        <p class="description">Description: ${restaurantDetail.description}</p>
        <div class="food-drink-list">
          <div>
             <p class="food">Food: </p>
             <ul>
             ${foodList}
             </ul>
          </div>
          <div>
              <p class="drink">Drinks: </p>
              <ul>
              ${drinkList}
              </ul>
          </div>
        </div>
        <h2><b>Address: ${restaurantDetail.address}, ${restaurantDetail.city}</b></h2>
        <div class="containerReview">
          <div class="contentReview">
          <h2> Reviewer </h2>
            ${customerReviewsList}
            <br>
          </div>
        </div>
      `;
    } catch (error) {
      console.log('Error:', error);
      containerCardDetail.innerHTML = 'Failed to fetch restaurant detail.';
    }
  },
};

export default detail;
