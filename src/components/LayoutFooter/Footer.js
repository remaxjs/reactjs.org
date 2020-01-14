/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import SectionLinks from './SectionLinks';
import React from 'react';
import { colors, media } from 'theme';
import { sectionListCommunity, sectionListDocs } from 'utils/sectionList';

// $FlowFixMe
import navFooter from '../../../content/footerNav.yml';

const Footer = ({ layoutHasSidebar = false }: { layoutHasSidebar: boolean }) => (
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
      '@media print': {
        display: 'none',
      },
    }}
  >
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}
      >
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingLeft: 40,
            },
          }}
        >
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>{navFooter.docs.title}</MetaTitle>
            {sectionListDocs.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink to={`/docs/${defaultItem.id}.html`} key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>{navFooter.channels.title}</MetaTitle>
            <SectionLinks links={navFooter.channels.items} />
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>{navFooter.community.title}</MetaTitle>
            <ExternalFooterLink href={`https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md`}>
              Code of Conduct
            </ExternalFooterLink>
            {sectionListCommunity.map(section => (
              <FooterLink to={`/community/${section.items[0].id}.html`} key={section.title}>
                {section.title}
              </FooterLink>
            ))}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>{navFooter.more.title}</MetaTitle>
            <SectionLinks links={navFooter.more.items} />
          </FooterNav>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
