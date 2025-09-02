---
title: Media (Images, Audio, Video, Iframes)
sidebar_position: 5
---

# Media (Images, Audio, Video, Iframes)

Bring your pages to life with media! HTML lets you add images, audio, video, and even embed other sites with iframes.

## Images
```html
<img src="cat.jpg" alt="A cute cat" width="200" />
```

## Audio
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

## Video
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Iframes
```html
<iframe src="https://example.com" width="300" height="200"></iframe>
```

:::tip
Always provide alt text for images and captions for audio/video when possible.
:::

## What's Next?

Let’s make your site accessible and search-friendly: [Accessibility & SEO Basics](./accessibility-seo.md).
