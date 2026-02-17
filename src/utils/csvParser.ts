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
  arxiv_link?: string;
  hf_link?: string;
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

// Parse papers CSV
export function parsePapersCSV(csvText: string): Paper[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",");
  const data: Paper[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const paper: Paper = {
      status: (values[0] || "").trim(),
      title: (values[1] || "").trim(),
      authors: (values[2] || "").trim(),
      venue: values[3] ? values[3].trim() : undefined,
      tags: values[4] ? values[4].split(",").map((tag) => tag.trim()) : [],
      arxiv_link: values[5] ? values[5].trim() : undefined,
      hf_link: values[6] ? values[6].trim() : undefined,
      color: (values[7] || "").trim(),
      icon: values[8] ? values[8].trim() : undefined,
      abstract: values[9] ? values[9].trim() : undefined,
    };

    // Clean up empty strings
    if (!paper.venue || paper.venue === "") delete paper.venue;
    if (!paper.arxiv_link || paper.arxiv_link === "") delete paper.arxiv_link;
    if (!paper.hf_link || paper.hf_link === "") delete paper.hf_link;
    if (!paper.icon || paper.icon === "") delete paper.icon;
    if (!paper.abstract || paper.abstract === "") delete paper.abstract;

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

