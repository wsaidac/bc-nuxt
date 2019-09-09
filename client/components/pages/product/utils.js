
import { get } from 'lodash'

const fakeContent = '<ul><li>This content description is fake</li><li>Onbeperkt bellen en SMSen naar Lebara nummers</li> <li>500 MB data 4G</li></ul>';

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
  value: get(post, 'information.issueValue', ''),
  title: post.title,
  rapidoId: get(post, 'rapidoProduct.id'),
  banner: getProductBanner(post),
  image: getProductImage(post),
  serviceFee: '1,00 $', // missing-field
  description: fakeContent, // missing-field
});

