# Video Setup Guide for Evalvate

## 📁 Folder Structure
Your current structure is maintained:
```
interview-master/
├── videos/                    # NEW: Place your video files here
├── assests/                   # Existing: Profile pictures
├── css/
├── js/
├── index.html
└── ... (other files)
```

## 🎥 How to Add Videos

### Option 1: Local Video Files (Recommended)
1. **Place your video files** in the `videos/` folder:
   - `aashi-jain-testimonial.mp4`
   - `ishank-kankaria-testimonial.mp4`
   - `ajitkumar-jain-testimonial.mp4`

2. **Video format requirements**:
   - Format: MP4 (recommended)
   - Codec: H.264
   - Resolution: 1920x1080 or 1280x720
   - File size: Keep under 50MB for better loading

### Option 2: YouTube Unlisted Videos
1. **Get your YouTube video ID** from the URL:
   - URL: `https://www.youtube.com/watch?v=ABC123xyz`
   - Video ID: `ABC123xyz`

2. **Update the HTML** in `index.html`:
   ```html
   <!-- Replace the local video source with YouTube embed -->
   <video class="testimonial-video" controls preload="none">
       <!-- Comment out local video -->
       <!-- <source src="videos/aashi-jain-testimonial.mp4" type="video/mp4"> -->
       
       <!-- Uncomment and add your YouTube video ID -->
       <source src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" type="video/mp4">
   </video>
   ```

3. **Use JavaScript function** for YouTube videos:
   ```javascript
   // Call this function when you want to use YouTube videos
   embedYouTubeVideo('aashi-jain-testimonial', 'YOUR_YOUTUBE_VIDEO_ID');
   ```

## 👥 How to Add Testimonials

### Adding New Testimonial Cards
1. **Add profile picture** to `assests/` folder
2. **Update HTML** in the testimonials section:
   ```html
   <div class="testimonial-card video-card">
       <div class="video-container" data-video-id="new-person-testimonial">
           <div class="video-placeholder" onclick="playVideo('new-person-testimonial')">
               <i class="fas fa-play-circle"></i>
               <span>Watch [Name]'s Story</span>
           </div>
           <video class="testimonial-video" controls preload="none">
               <source src="videos/new-person-testimonial.mp4" type="video/mp4">
               Your browser does not support the video tag.
           </video>
       </div>
       <div class="testimonial-author">
           <img src="assests/new-person-pic.jpeg" alt="[Name]" class="author-image">
           <div class="author-info">
               <h4>[Full Name]</h4>
               <p>[Job Title] at [Company]</p>
           </div>
       </div>
   </div>
   ```

### Adding Text-Only Testimonials
If you want to add testimonials without videos:
```html
<div class="testimonial-card text-card">
    <div class="testimonial-content">
        <p>"[Testimonial text here]"</p>
    </div>
    <div class="testimonial-author">
        <img src="assests/person-pic.jpeg" alt="[Name]" class="author-image">
        <div class="author-info">
            <h4>[Full Name]</h4>
            <p>[Job Title] at [Company]</p>
        </div>
    </div>
</div>
```

## 🎨 Customization Options

### Video Thumbnails
- Add custom thumbnails by replacing the gradient background
- Update CSS in `.video-placeholder`:
  ```css
  .video-placeholder {
      background: url('path/to/thumbnail.jpg') center/cover;
  }
  ```

### Video Controls
- Videos have standard HTML5 controls
- Autoplay is disabled by default (browser policy)
- Videos pause when user clicks outside

### Responsive Design
- Videos automatically scale on mobile devices
- Grid changes to single column on small screens

## 🚀 Quick Start Steps

1. **For Local Videos**:
   - Copy your video files to the `videos/` folder
   - Rename them to match the HTML: `aashi-jain-testimonial.mp4`, etc.
   - Open `index.html` in a browser

2. **For YouTube Videos**:
   - Get your YouTube video IDs
   - Update the HTML source URLs
   - Use the `embedYouTubeVideo()` function

3. **Test the functionality**:
   - Click on video placeholders
   - Videos should play with controls
   - Placeholder returns when video ends

## 🔧 Troubleshooting

### Video Not Playing
- Check file path in HTML
- Ensure video format is supported (MP4 recommended)
- Check browser console for errors

### YouTube Videos Not Loading
- Verify YouTube video ID is correct
- Ensure video is not private (unlisted is fine)
- Check if video allows embedding

### Performance Issues
- Compress videos to reduce file size
- Use lower resolution for web (720p is sufficient)
- Consider using YouTube for large files

## 📱 Mobile Considerations
- Videos work on mobile browsers
- Touch controls are supported
- Responsive design adapts to screen size

## 🎯 Best Practices
- Keep video files under 50MB
- Use MP4 format for best compatibility
- Test on different browsers
- Optimize videos for web (compression)
- Use descriptive file names
- Add alt text for accessibility
