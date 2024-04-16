import { CATEGORIES } from '../../data';
import { Shell } from '../Shell';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested } from './NavbarNested/NavbarNested';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomeTest({ componentsCountByCategory }: HomePageProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

  return (
    <Shell>
      <NavbarNested></NavbarNested>
    </Shell>
  );
}
