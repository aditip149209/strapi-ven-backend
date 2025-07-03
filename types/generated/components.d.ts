import type { Schema, Struct } from '@strapi/strapi';

export interface LandingPageComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['brownlight', 'brownfore', 'textmain', 'cardlight', 'textdark', 'coffee']
    >;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageComponentsCardInfo extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_card_infos';
  info: {
    displayName: 'CardInfo';
  };
  attributes: {
    card: Schema.Attribute.Component<'landing-page-components.cards', true>;
  };
}

export interface LandingPageComponentsCards extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LandingPageComponentsPicture extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_pictures';
  info: {
    displayName: 'Picture';
  };
  attributes: {
    imageurl: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LandingPageComponentsPicturelist
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_picturelists';
  info: {
    displayName: 'picturelist';
  };
  attributes: {
    picture: Schema.Attribute.Component<
      'landing-page-components.picture',
      true
    >;
  };
}

export interface LandingPageComponentsSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_subtitles';
  info: {
    displayName: 'Subtitle';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
  };
}

export interface LandingPageComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface LandingPageComponentsTwoButtonCta
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_components_two_button_ctas';
  info: {
    displayName: 'TwoButtonCTA';
  };
  attributes: {
    FirstButton: Schema.Attribute.Component<
      'landing-page-components.button',
      true
    >;
    SecondButton: Schema.Attribute.Component<
      'landing-page-components.button',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing-page-components.button': LandingPageComponentsButton;
      'landing-page-components.card-info': LandingPageComponentsCardInfo;
      'landing-page-components.cards': LandingPageComponentsCards;
      'landing-page-components.header': LandingPageComponentsHeader;
      'landing-page-components.picture': LandingPageComponentsPicture;
      'landing-page-components.picturelist': LandingPageComponentsPicturelist;
      'landing-page-components.subtitle': LandingPageComponentsSubtitle;
      'landing-page-components.title': LandingPageComponentsTitle;
      'landing-page-components.two-button-cta': LandingPageComponentsTwoButtonCta;
    }
  }
}
