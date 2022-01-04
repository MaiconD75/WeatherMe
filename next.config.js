/** @type {import('next').NextConfig} */

const withImages = require('next-images')

module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    },
  ...withImages(
    {
      esModule: true,
      inlineImageLimit: false,
    }
  )
}
