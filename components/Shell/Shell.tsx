import Link from 'next/link';
import { AppShell, Button, Collapse, Container, RemoveScroll, Group, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeControl, HeaderControls, SearchMobileControl } from '@mantinex/mantine-header';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import { searchHandlers } from '../Search';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell header={{ height: 60 }}>
      <Button variant="transparent" color="gray" onClick={toggle}>Toggle content</Button>
      <Collapse in={opened}>
        <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
          <Container size="responsive" px="md" className={classes.inner}>
            <Button variant="transparent" color="gray" onClick={toggle}>Toggle content</Button>
            <HeaderControls
              visibleFrom="sm"
              onSearch={searchHandlers.open}
              githubLink={meta.gitHubLinks.mantineUi}
              withDirectionToggle={false}
              discordLink={meta.discordLink}
              />

            <Group hiddenFrom="sm">
              <SearchMobileControl onSearch={searchHandlers.open} />
              <ColorSchemeControl />
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <div className={classes.main}>{children}</div>
        </AppShell.Main>
      </Collapse>
    </AppShell>
  );
}
