<template>
    <v-dialog v-model="dialogVisible" max-width="600px">
      <v-card>
        <v-card-title>
          Edit Text
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="editedText" label="Edit Content" outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" @click="saveText">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "EditTextModal",
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      currentText: {
        type: String,
        required: true
      },
      textId: {
        type: String,
        required: true
      }
    },
    emits: ["update:visible", "save-text"],
    setup(props, { emit }) {
      const dialogVisible = ref(props.visible);
      const editedText = ref(props.currentText);
  
      // Detect changes to the "visible" prop and update dialog visibility
      watch(
        () => props.visible,
        (newValue) => {
          dialogVisible.value = newValue;
        }
      );
  
      const closeDialog = () => {
        dialogVisible.value = false;
        emit("update:visible", false);
      };
  
      const saveText = () => {
        emit("save-text", { id: props.textId, text: editedText.value });
        closeDialog();
      };
  
      return {
        dialogVisible,
        editedText,
        closeDialog,
        saveText
      };
    }
  };
  </script>
  