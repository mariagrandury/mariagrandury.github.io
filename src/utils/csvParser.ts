// Shared CSV parsing utilities

export interface Event {
  year: string;
  date: string;
  talk: string;
  organizer?: string;
  event: string;
  event_link: string;
  recording_link?: string;
  sm_link?: string;
  image_link?: string;
  type?: string;
  location?: string;
  language: string;
  abstract?: string;
  tags: string[];
}

export interface Paper {
  status: string;
  title: string;
  authors: string;
  venue?: string;
  tags: string[];
  paper_link?: string;
  website_link?: string;
  hf_link?: string;
  slides_link?: string;
  poster_link?: string;
  linkedin_link?: string;
  x_link?: string;
  github_link?: string;
  award?: string;
  color: string;
  icon?: string;
  abstract?: string;
}

export interface Project {
  status: string;
  title: string;
  tags: string[];
  link: string;
  color: string;
  icon: string;
  description: string;
}

export interface Entity {
  type: string;
  name: string;
  title: string;
  year_start: string;
  year_end?: string;
  logo: string;
  url?: string;
}

// Parse CSV line handling quoted fields
export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

// Parse events CSV
export function parseEventsCSV(csvText: string): Event[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",");
  const data: Event[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const event: Event = {
      year: (values[0] || "").trim(),
      date: (values[1] || "").trim(),
      talk: (values[2] || "").trim(),
      organizer: (values[3] || "").trim(),
      event: (values[4] || "").trim(),
      event_link: (values[5] || "").trim(),
      recording_link: (values[6] || "").trim(),
      sm_link: (values[7] || "").trim(),
      image_link: (values[8] || "").trim(),
      type: (values[9] || "").trim(),
      location: (values[10] || "").trim(),
      language: (values[11] || "").trim(),
      abstract: (values[12] || "").trim(),
      tags: values[13] ? values[13].split(",").map((tag) => tag.trim()) : [],
    };

    // Clean up empty strings - set to undefined so they're not passed as props
    if (!event.organizer || event.organizer === "") delete event.organizer;
    if (!event.recording_link || event.recording_link === "") delete event.recording_link;
    if (!event.abstract || event.abstract === "") delete event.abstract;
    if (!event.sm_link || event.sm_link === "") delete event.sm_link;
    if (!event.image_link || event.image_link === "") delete event.image_link;
    if (!event.type || event.type === "") delete event.type;
    if (!event.location || event.location === "") delete event.location;

    data.push(event);
  }

  return data;
}

// Parse papers CSV (header row defines column order; supports legacy `arxiv_link`)
export function parsePapersCSV(csvText: string): Paper[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.trim());
  const col = (...names: string[]) => {
    for (const name of names) {
      const i = headers.indexOf(name);
      if (i >= 0) return i;
    }
    return -1;
  };

  const idx = {
    status: col("status"),
    title: col("title"),
    authors: col("authors"),
    venue: col("venue"),
    tags: col("tags"),
    paper_link: col("paper_link", "arxiv_link"),
    website_link: col("website_link"),
    hf_link: col("hf_link"),
    slides_link: col("slides_link"),
    poster_link: col("poster_link"),
    linkedin_link: col("linkedin_link"),
    x_link: col("x_link"),
    github_link: col("github_link"),
    award: col("award"),
    color: col("color"),
    icon: col("icon"),
    abstract: col("abstract"),
  };

  const get = (values: string[], key: keyof typeof idx) => {
    const i = idx[key];
    if (i < 0) return "";
    return (values[i] || "").trim();
  };

  const data: Paper[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const tagsRaw = get(values, "tags");
    const paper: Paper = {
      status: get(values, "status"),
      title: get(values, "title"),
      authors: get(values, "authors"),
      venue: get(values, "venue") || undefined,
      tags: tagsRaw ? tagsRaw.split(",").map((tag) => tag.trim()) : [],
      paper_link: get(values, "paper_link") || undefined,
      website_link: get(values, "website_link") || undefined,
      hf_link: get(values, "hf_link") || undefined,
      slides_link: get(values, "slides_link") || undefined,
      poster_link: get(values, "poster_link") || undefined,
      linkedin_link: get(values, "linkedin_link") || undefined,
      x_link: get(values, "x_link") || undefined,
      github_link: get(values, "github_link") || undefined,
      award: get(values, "award") || undefined,
      color: get(values, "color"),
      icon: get(values, "icon") || undefined,
      abstract: get(values, "abstract") || undefined,
    };

    if (!paper.venue) delete paper.venue;
    if (!paper.paper_link) delete paper.paper_link;
    if (!paper.website_link) delete paper.website_link;
    if (!paper.hf_link) delete paper.hf_link;
    if (!paper.slides_link) delete paper.slides_link;
    if (!paper.poster_link) delete paper.poster_link;
    if (!paper.linkedin_link) delete paper.linkedin_link;
    if (!paper.x_link) delete paper.x_link;
    if (!paper.github_link) delete paper.github_link;
    if (!paper.award) delete paper.award;
    if (!paper.icon) delete paper.icon;
    if (!paper.abstract) delete paper.abstract;

    data.push(paper);
  }

  return data;
}

// Parse projects CSV
export function parseProjectsCSV(csvText: string): Project[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",");
  const data: Project[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const project: Project = {
      status: (values[0] || "").trim(),
      title: (values[1] || "").trim(),
      tags: values[2] ? values[2].split(",").map((tag) => tag.trim()) : [],
      link: (values[3] || "").trim(),
      color: (values[4] || "").trim(),
      icon: (values[5] || "").trim(),
      description: (values[6] || "").trim(),
    };

    // Clean up empty strings
    if (!project.link || project.link === "") project.link = "";
    if (!project.color || project.color === "") project.color = "";
    if (!project.icon || project.icon === "") project.icon = "";
    if (!project.description || project.description === "") project.description = "";

    data.push(project);
  }

  return data;
}

// Parse entities CSV (About page)
export function parseEntitiesCSV(csvText: string): Entity[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.trim());
  const col = (name: string) => headers.indexOf(name);
  const idx = {
    type: col("type"),
    name: col("name"),
    title: col("title"),
    year_start: col("year_start"),
    year_end: col("year_end"),
    logo: col("logo"),
    url: col("url"),
  };

  const get = (values: string[], index: number) => {
    if (index < 0) return "";
    return (values[index] || "").trim();
  };

  const data: Entity[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const entity: Entity = {
      type: get(values, idx.type),
      name: get(values, idx.name),
      title: get(values, idx.title),
      year_start: get(values, idx.year_start),
      year_end: get(values, idx.year_end) || undefined,
      logo: get(values, idx.logo),
      url: get(values, idx.url) || undefined,
    };

    if (!entity.year_end) delete entity.year_end;
    if (!entity.url) delete entity.url;
    data.push(entity);
  }

  return data;
}

