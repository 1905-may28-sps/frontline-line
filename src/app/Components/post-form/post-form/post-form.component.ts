import { Component} from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';
import { Post } from 'src/app/model/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{

  
  post: Post;
  PostServiceService: any;
  constructor(private route: ActivatedRoute, private router:Router, private postService: PostServiceService) {
this.post=new Post();
  }
  onSubmit() {
        this.PostServiceService.save(this.post).subscribe();
      }
     
    //   gotoPList() {
    //     this.router.navigate(['/users']);
    //   }
}
