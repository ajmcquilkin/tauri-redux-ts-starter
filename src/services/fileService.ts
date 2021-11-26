import { IFile } from 'types/file';

export const fetchFile = async (path: string): Promise<IFile> => ({
  basename: 'Test File',
  filePath: path,
  fileType: 'txt',
  isDir: false,
  isFile: true,
  isHidden: false,
  isSystem: false,
  isTrash: false,
  created: new Date(),
  lastAccessed: new Date(),
  lastModified: new Date(),
  readonly: false,
  size: 0,
});
