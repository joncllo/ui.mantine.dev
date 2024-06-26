import { GetStaticProps } from 'next';
import { countComponentsByCategory, getAllComponents } from '../data/components';
import { HomeTest } from '../components/HomeTest/HomeTest';

export default HomeTest;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    componentsCountByCategory: countComponentsByCategory(),
    allComponents: getAllComponents(),
  },
});
