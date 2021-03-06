import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuicklinkStrategy } from "ngx-quicklink";

const routes: Routes = [
  {
    path: "foo",
    loadChildren: () => import("./foo/foo.module").then((m) => m.FooModule),
  },
  {
    path: "bar",
    loadChildren: () => import("./bar/bar.module").then((m) => m.BarModule),
  },
  {
    path: "baz",
    loadChildren: () => import("./baz/baz.module").then((m) => m.BazModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
