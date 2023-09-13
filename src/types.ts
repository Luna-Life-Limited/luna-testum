export type TextDisplayType = "plain-text" | "bold-text";

type ParagraphContent = {
  text: string;
  type: TextDisplayType;
};

export type Paragraph = {
  content: ParagraphContent[];
  type: "paragraph";
};

type ListContent = ParagraphContent | Paragraph;

export type List = {
  content: ListContent[];
  type: "ordered-list" | "bullet-list";
};

type RichTextItem = Paragraph | List;

export type RichTextItems = RichTextItem[];

export type Category = {
  id: string;
  title: string;
  color: string;
};

export type Article = {
  id: string;
  title: string;
  categories: string[];
  subtitle: string;
  imageUrl: string;
  content: RichTextItems;
  originalPublishDate: string;
};
