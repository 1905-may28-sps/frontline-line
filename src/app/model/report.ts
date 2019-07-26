import { Post } from './post';
import { User } from './user.model';
import { ReportType } from './report-type';

export class Report {
    reportId: number;
    reportType: ReportType;
    post: Post;
    reporter: User;
}
