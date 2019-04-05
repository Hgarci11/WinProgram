/* ## Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	4. logs the current photo name.
	4. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.

### Exercise Answer

```javascript
*/

var slideshow = {
    photoList: ["img1", "img2", "img3", "img4"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        for (this.currentPhotoIndex = 0; this.currentPhotoIndex < this.photoList.length; this.currentPhotoIndex++){
            console.log(this.photoList[this.currentPhotoIndex]);
        }
        console.log("End of slideshow");
        
    },
    prevPhoto: function() {
        for (this.currentPhotoIndex = this.photoList.length; this.currentPhotoIndex > 0; this.currentPhotoIndex--) {
            console.log(this.photoList[this.currentPhotoIndex-1]);
        }
        console.log("End of slideshow");
    },
    getCurrentPhoto: function (){
        console.log(this.photoList[this.currentPhotoIndex])
    }

}
    slideshow.prevPhoto();
    slideshow.getCurrentPhoto();
    slideshow.nextPhoto();