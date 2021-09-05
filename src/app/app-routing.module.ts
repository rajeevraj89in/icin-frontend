import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileComponent as UserProfileComponent} from './pages/user/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { TransactionListComponent } from './pages/user/transaction-list/transaction-list.component';
import { UserDashboradComponent } from './pages/user/user-dashborad/user-dashborad.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ChequeComponent } from './pages/user/cheque/cheque.component';
import { BalanceComponent } from './pages/user/balance/balance.component';
import { TransferComponent } from './pages/user/transfer/transfer.component';
import { RoleandguideComponent } from './pages/admin/roleandguide/roleandguide.component';
import { GrantTransferComponent } from './pages/admin/grant-transfer/grant-transfer.component';
import { UserBlockComponent } from './pages/admin/user-block/user-block.component';
import { ChequeApvComponent } from './pages/admin/cheque-apv/cheque-apv.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent

      },
      {
        path: 'categories',
        component: ViewCategoriesComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent
      },
      {
        path: 'quiz/:qId',
        component: UpdateQuizComponent
      },
      {
        path: 'view-questions/:qId/:title',
        component: ViewQuestionsComponent
      },
      {
        path: 'add-question/:qId/:title',
        component: AddQuestionComponent
      },
      {
        path: 'roleguide',
        component: RoleandguideComponent
      },
      {
        path: 'granttransfer',
        component: GrantTransferComponent
      },
      {
        path: 'blockuser',
        component: UserBlockComponent
      },
      {
        path: 'chequeapv',
        component: ChequeApvComponent
      },
    ]
  },
  {
    path: 'user',
    component: UserDashboradComponent,
    canActivate: [NormalGuard],
    children: [
      // {
      //   path: ':catId',
      //   component: LoadQuizComponent
      // },
      // {
      //   path: 'instruction/:qid',
      //   component: InstructionsComponent
      // },
      {
        path: 'transactions',
        component: TransactionListComponent
      },
      {
        path: 'profile/:nId',
        component: UserProfileComponent
      },
      {
        path: 'cheque',
        component: ChequeComponent
      },
      {
        path: 'balance',
        component: BalanceComponent
      },
      {
        path: 'transfer',
        component: TransferComponent
      },
    ]
  },
  {
    path: 'start/:qid',
    canActivate: [NormalGuard],
    component: StartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
