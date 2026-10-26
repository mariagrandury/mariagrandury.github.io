import type { Paper } from "./csvParser";

const ME = "María Grandury";

export const isFirstAuthor = (paper: Paper) => paper.authors.trim().startsWith(ME);

// Year from the venue ("..., 2025") or from the arXiv id (2501.09775 -> 2025)
export function paperYear(paper: Paper): string {
  const fromVenue = paper.venue?.match(/(19|20)\d{2}(?!.*(19|20)\d{2})/)?.[0];
  if (fromVenue) return fromVenue;
  const arxiv = paper.paper_link?.match(/arxiv\.org\/abs\/(\d{2})\d{2}\./)?.[1];
  return arxiv ? `20${arxiv}` : "";
}

export function toBibtex(paper: Paper): string {
  const year = paperYear(paper);
  const lastName = paper.authors.split(/,| and /)[0].trim().split(" ").pop()!.toLowerCase();
  const firstWord = paper.title.split(/[\s:]/)[0].toLowerCase().replace(/[^a-z0-9]/g, "");
  // "(...)" and "..." mark omitted co-authors
  const authors = paper.authors
    .split(/,\s*|\s+and\s+/)
    .map((a) => a.replace(/\(?\.\.\.\)?/g, "").trim())
    .filter(Boolean)
    .join(" and ");
  const etAl = /\.\.\./.test(paper.authors) ? " and others" : "";

  const venue = paper.venue?.replace(/,?\s*(19|20)\d{2}\s*$/, "");
  const type = !venue
    ? "misc"
    : /thesis/i.test(venue)
      ? "mastersthesis"
      : /proceedings|conference|workshop|association|advances in/i.test(venue)
        ? "inproceedings"
        : "article";
  const venueField = { inproceedings: "booktitle", mastersthesis: "school", article: "journal", misc: "" }[type];

  const fields = [
    ["title", `{${paper.title}}`],
    ["author", `{${authors}${etAl}}`],
    venue ? [venueField, `{${venue}}`] : null,
    year ? ["year", `{${year}}`] : null,
    paper.paper_link ? ["url", `{${paper.paper_link}}`] : null,
  ].filter(Boolean) as string[][];

  return `@${type}{${lastName}${year}${firstWord},\n${fields.map(([k, v]) => `  ${k} = ${v}`).join(",\n")}\n}`;
}
