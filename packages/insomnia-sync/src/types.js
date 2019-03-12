// @flow

export type Project = {
  id: string,
  // TODO: Add the rest
};

export type DocumentKey = string;
export type BlobId = string;

export type Head = {|
  branch: string,
|};

export type SnapshotStateEntry = {|
  key: DocumentKey,
  blob: BlobId,
  name: string,
|};

export type SnapshotState = Array<SnapshotStateEntry>;
export type SnapshotStateMap = { [DocumentKey]: SnapshotStateEntry };
export type SnapshotId = string;

export type Snapshot = {|
  id: SnapshotId,
  created: Date,
  parent: string,
  author: string,
  name: string,
  description: string,
  state: Array<SnapshotStateEntry>,
|};

export type Branch = {|
  name: string,
  created: Date,
  modified: Date,
  snapshots: Array<string>,
|};

export type StageEntryDelete = {|
  deleted: true,
  key: string,
  name: string,
|};

export type StageEntryAdd = {|
  added: true,
  key: string,
  name: string,
  blobId: string,
  blobContent: string,
|};

export type StageEntryModify = {|
  modified: true,
  key: string,
  name: string,
  blobId: string,
  blobContent: string,
|};

export type StageEntry = StageEntryDelete | StageEntryAdd | StageEntryModify;

export type Stage = {
  [DocumentKey]: StageEntry,
};

export type StatusCandidate = {|
  key: DocumentKey,
  name: string,
  document: Object,
|};

export type StatusCandidateMap = { [DocumentKey]: StatusCandidate };

export type Status = {|
  key: string,
  stage: Stage,
  unstaged: {
    [DocumentKey]: StageEntry,
  },
|};