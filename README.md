# README - Podcast Assignment
## Installation Instructions
In the project directory, you can run:
### `npm install`
Then run:
### `npm start`
This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 3rd Party Library Choices
1. **[Moment.js](https://momentjs.com):** Fixes some issues with the javascript Date object and is much easier to format dates with.
2. **[node-sass](https://github.com/sass/node-sass):** Allows the use of the SASS CSS pre-processor.
3. **[react-day-picker](https://react-day-picker.js.org):** A simple Date picker that looks nice, is easily implemented, and is still being supported.
4. **[react-dropzone](https://react-dropzone.netlify.com):** A simple drag and drop file library that is easily implemented, allows easy customization, and is still being supported.

## Future Improvements
1. **Error Messaging:** The error messaging at this time is ugly and not user friendly.  Something like a snackbar that pops up and then goes away after a few seconds would be a nicer design.  Also, I would want generic error messages instead of the error message we are receiving from the "backend".
2. **Image dropzone**  
    - The image drop zone is not showing a preview and can't upload to the "backend" to be displayed after saving.  I definitely would want to implement something so even in this lite version of the site I could at least see a preview.
    - The image dropzone is not as UX friendly as I would like. A more UI/UX friendly design would be to allow the user to preview the image and cancel the upload of the image. Also, providing some image editing tools (cropping, resizing, etc.) and an image URL input would be nice.
    - There should be error messaging to let the user know the file is not the correct size (mb or pixels) or type.
3. **Input Fields** UI would look nicer if the input fields were more responsive.  This could be done by calculating the number of characters in the values and setting the input width to that. Also, I would try to make it so the inputs do not shift when they become editable.
4. **Add Redux/Flux:** Redux/Flux would help clean up the code as I would not need to be passing down so much state/functions from the parent components to the children.
5. **Edit Mode UI/UX Improvement Ideas:** 
    - Add an edit icon next to each input when in edit mode so you can see the normal design of the site as is and the specific inputs only become editable when you click the edit icons next to them.
    - Add the ability for users to cancel all changes (or certain changes).
6. **Audio Player:** Create some amazing, stylish customized controls!  I was only able to add in some basic buttons under the native controls.  I would absolutely want to create my own controls so they look nicer.
7. **Validation:** There is no frontend validation. We don't want users being able to save podcasts without an image or a title, etc.  I would add error messaging/error styling that points out that these fields are required.
8. **Image Placeholder:** There should be some type of image placeholder while the image loads.  This would just look nicer and could be something like a blurry or vectorized image.
9. **Date Picker:** I would want to think about how far out or far back I want a user to be able to choose a date from. It may not make any sense to allow them to pick future dates and definitely doesn't make sense to allow certain dates in the past.

## Bugs:
- There are some outlines that appear around specific elements when they are focused/clicked.
- Date picker does not highlight the date selected.
