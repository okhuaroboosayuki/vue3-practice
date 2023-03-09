<template>
  <div class="image_upload_wrapper">
    <h4>Image: (recommended 450x600px)</h4>

    <input type="file" @change="uploadFile" />

    <p v-if="state.message">{{ state.message }}</p>

    <img :src="state.imagePreview" class="preview_image" />
    <div class="image_buttons">
      <div>
        <button @click="repositionImage('top')">
          <img src="../../assets/icons/top.svg" alt="image top selector" />
        </button>

        <button @click="repositionImage('center')">
          <img src="../../assets/icons/middle.svg" alt="image middle selector" />
        </button>

        <button @click="repositionImage('bottom')">
          <img src="../../assets/icons/bottom.svg" alt="image bottom selector" />
        </button>
      </div>

      <button @click="remove" class="remove_image_btn">remove</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import useCurrentCard from "../../composables/useCurrentCard";

export default {
  setup() {
    const { updateImage, repositionImage, removeImage } = useCurrentCard();

    const state = reactive({
      imagePreview: "",
      message: "",
      formData: null,
    });

    // remove function
    function remove() {
      state.imagePreview = "";
      removeImage();
    }

    async function uploadFile(event) {
      const reader = new FileReader();
      reader.onload = function () {
        state.imagePreview = reader.result;
      };

      //   displays an error message when an error occurs
      reader.onerror = function () {
        state.message = "There was a problem uploading your image, please try again";
      };

      // the code below reads the file being uploaded
      reader.readAsDataURL(event.target.files[0]);
      //   console.log(reader);

      //   uploading to cloudinary
      try {
        // FormData is a method of constructing a set of key value pairs in a correct needed to send data to a server
        state.formData = new FormData();
        state.formData.append("upload_preset", "onvosne2");
        state.formData.append("file", event.target.files[0]);

        // using axios
        const imageRequestData = {
          url: "https://api.cloudinary.com/v1_1/dg0sck16v/upload",
          method: "POST",
          data: state.formData,
        };

        const response = await axios(imageRequestData);

        // update image on the card preview
        updateImage(response.data.url);
      } catch (error) {
        throw new Error(error);
      }
    }

    return {
      uploadFile,
      state,
      repositionImage,
      remove,
    };
  },
};
</script>

<style scoped>
.image_upload_wrapper {
  text-align: left;
}

.image_buttons {
  display: flex;
  justify-content: space-between;
}

.image_buttons img {
  width: 30px;
}

h4 {
  font-weight: 300;
  margin: 10px 0;
}

input[type="file"] {
  margin: 0 0 10px 0;
}

button {
  margin-right: 5px;
}

.remove_image_btn {
  color: rgb(208, 90, 90);
}

.remove_image_btn:hover {
  color: rgb(123, 44, 44);
}
</style>
