// Probably this file will be removed. Ignore it for now.
// @TODO: figure it out where run this data parsering

import { get } from 'lodash';


const getProductBanner = (post = {}) => {
  const { content: { banner, image }, categories = {} } = post;
  const categoryBanner = get(categories, 'nodes[0].categoryHeader.banner', null);
  return banner || categoryBanner || image;
};

const getProductImage = (post = {}) => {
  const { content: { banner, image }, categories = {} } = post;
  const categoryImage = get(categories, 'nodes[0].categoryHeader.image', null);
  return image || categoryImage || banner;
};

/**
 * TODO: Move this to a parent component or API Hub (?)
 * the idea is only pass the necessary fields to the component
 */
export const getProductFromPost = (post = {}) => ({
  id: post.id,
  slug: post.slug,
  value: get(post, 'information.issueValue', ''),
  title: post.title,
  rapidoId: get(post, 'rapidoProduct.id'),
  banner: getProductBanner(post),
  image: getProductImage(post),
  serviceFee: get(post, 'information.serviceFeeValue', ''), // missing-field
  description: 'missing content', // get(post, 'brands.nodes[0].highlight.content', ''), // missing-field
});

export const formatProduct = (product = {}, image) => ({
  id: product.id,
  value: get(product, 'information.issueValue', ''),
  title: product.title,
  slug: product.slug,
  image: product.content.image || image,
  serviceFee: get(product, 'information.serviceFeeValue', ''), // missing-field
  content: 'missing content', // get(post, 'brands.nodes[0].highlight.content', ''), // missing-field
});


export const getProductListFromPost = (post) => {
  const { image } = post.content;
  return get(post, 'brands.nodes[0].products.nodes', []).map((p) => formatProduct(p, image));
};
