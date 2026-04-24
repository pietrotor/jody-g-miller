import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvisoryArea extends Struct.ComponentSchema {
  collectionName: 'components_shared_advisory_areas';
  info: {
    description: 'A single advisory area';
    displayName: 'Advisory Area';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBoardMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_board_members';
  info: {
    description: 'A board member with name and role/title';
    displayName: 'Board Member';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFamilyLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_family_links';
  info: {
    description: 'A labeled external link (for family member sites)';
    displayName: 'Family Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedInvestor extends Struct.ComponentSchema {
  collectionName: 'components_shared_investors';
  info: {
    description: 'An investor with name and description';
    displayName: 'Investor';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMilestone extends Struct.ComponentSchema {
  collectionName: 'components_shared_milestones';
  info: {
    description: 'A single milestone or achievement';
    displayName: 'Milestone';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRecognition extends Struct.ComponentSchema {
  collectionName: 'components_shared_recognitions';
  info: {
    description: 'A media recognition entry with label and description';
    displayName: 'Recognition';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSelectedPieceEntry extends Struct.ComponentSchema {
  collectionName: 'components_shared_selected_piece_entries';
  info: {
    description: "A curated archive item with Jody's personal introduction";
    displayName: 'Selected Piece';
  };
  attributes: {
    archiveItem: Schema.Attribute.Relation<
      'oneToOne',
      'api::archive-item.archive-item'
    >;
    image: Schema.Attribute.Media<'images'>;
    personalIntro: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSpeakingTopic extends Struct.ComponentSchema {
  collectionName: 'components_shared_speaking_topics';
  info: {
    description: 'A conference/speaking topic with title and description';
    displayName: 'Speaking Topic';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_events';
  info: {
    description: 'A year + event entry for the BTG history timeline';
    displayName: 'Timeline Event';
  };
  attributes: {
    event: Schema.Attribute.Text & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.advisory-area': SharedAdvisoryArea;
      'shared.board-member': SharedBoardMember;
      'shared.family-link': SharedFamilyLink;
      'shared.investor': SharedInvestor;
      'shared.milestone': SharedMilestone;
      'shared.recognition': SharedRecognition;
      'shared.selected-piece-entry': SharedSelectedPieceEntry;
      'shared.speaking-topic': SharedSpeakingTopic;
      'shared.timeline-event': SharedTimelineEvent;
    }
  }
}
