import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import Text from "../components/Text";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";
import Head from "../components/Head";
import Heading, { H2, H3 } from "../components/Heading";
import Main from "../components/Main";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";

import projects from "../open-source-projects";

const OpenSourceProjectTableRow = ({ project }) => (
  <>
    <Flex width={0.2} alignItems="center" height={1}>
      <Heading as="h4" fontSize={2} alignSelf="center">
        {project.name}
      </Heading>
    </Flex>
    <Flex alignItems="center" width={0.75} px={3}>
      <Text color="#666">{project.description}</Text>
    </Flex>
    <Flex alignItems="center" justifyContent="flex-end" width={0.06}>
      <Text textAlign="right" color="#666" fontSize={1}>
        {project.stars.toLocaleString()}
        &nbsp;★
      </Text>
    </Flex>
  </>
);

export default () => (
  <Main>
    <Head
      title="My Open Source Projects - Max Stoiber (@mxstbr)"
      description="A list of most of the open source projects I've (co-) created and/or maintained."
    />
    <PageHeader>
      <H2 alignSelf="center" mt={[4, 5]}>
        My Open Source Projects{" "}
      </H2>
      <Paragraph centered>
        These are most of the open source projects I've (co-) created and am
        somewhat actively involved in or using. For the full list visit{" "}
        <Link href="https://github.com/mxstbr">
          my GitHub profile (@mxstbr)
        </Link>
        .
      </Paragraph>
    </PageHeader>
    <Table
      rows={projects
        .filter(p => p.active !== false)
        .sort((a, b) => b.stars - a.stars)
        .map(p => ({
          ...p,
          id: p.repo,
          href: `https://github.com/${p.repo}`
        }))}
      render={row => <OpenSourceProjectTableRow project={row} />}
    />
    <Text color="#666" mt={3} fontSize={2}>
      Total:{" "}
      {projects
        .filter(p => p.active !== false)
        .reduce((total, { stars }) => total + stars, 0)}
      &nbsp;★
    </Text>
    <H2 my={null} mt={4} mb={3} fontSize={3}>
      Past Open Source Projects
    </H2>
    <Paragraph mb={3}>
      I used to work on these projects, but am either no longer involved with
      them or they are archived.
    </Paragraph>
    <Table
      rows={projects
        .filter(p => p.active === false)
        .sort((a, b) => b.stars - a.stars)
        .map(p => ({
          ...p,
          id: p.repo,
          href: `https://github.com/${p.repo}`
        }))}
      render={row => <OpenSourceProjectTableRow project={row} />}
    />
  </Main>
);