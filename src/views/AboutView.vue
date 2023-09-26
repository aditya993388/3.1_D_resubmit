<template>
  <div class="about-container">
    <h2 class="about-heading">About Us</h2>

    <div class="about-content">
      <p>Welcome to FoodFrenzy, your ultimate food recommendation app! We are a passionate team of foodies, tech enthusiasts, and culinary experts who share a common love for great food and technology. Our mission is to simplify your dining decisions, making it easier for you to discover new culinary experiences and savor delicious meals.</p>

      <p>FoodFrenzy was born out of a simple idea – to create a platform that connects people with their next incredible meal. We believe that every meal should be a memorable experience, whether you're trying a new cuisine or indulging in your favorite comfort food. Our journey began with a shared vision: to transform the way people discover and enjoy food.</p>

      <p>Why Choose Us:</p>
      <ul>
        <li><strong>Personalized Recommendations:</strong> We understand that everyone's palate is unique. Our app learns your preferences over time to provide tailored food suggestions you'll love.</li>
        <li><strong>Diverse Cuisine:</strong> From international delicacies to local favorites, we curate a diverse selection of dishes and dining experiences to suit every craving.</li>
        <li><strong>User-Focused:</strong> We value your feedback and continuously strive to enhance your dining journey. Your input helps us improve our app and recommendations.</li>
        <li><strong>Community:</strong> FoodFrenzy is more than just an app; it's a community of food enthusiasts. Join us in exploring the world one dish at a time.</li>
      </ul>

      <p>We are committed to helping you discover the joy of culinary exploration. With FoodFrenzy, you'll embark on a delicious adventure, one bite at a time. Our dedication to providing exceptional food recommendations drives us forward, and we look forward to sharing this journey with you.</p>
    </div>
    
  
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        :src="embedUrl"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      videoId: this.extractVideoIdFromUrl("https://www.youtube.com/watch?v=T4NOt727wqI"),
    };
  },
  computed: {
    
    embedUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
  },
  methods: {
    extractVideoIdFromUrl(url) {
      const videoIdMatch = url.match(/[?&]v=([^?&]+)/);
      if (videoIdMatch) {
        return videoIdMatch[1];
      }
      return ""; 
    },
  },
};
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.about-heading {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.about-content {
  max-width: 800px;
  text-align: left;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

.video-container {
  margin-top: 20px;
}

iframe {
  width: 100%;
}
</style>
