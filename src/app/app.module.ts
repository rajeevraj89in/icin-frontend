import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { authInerceptorProvidors } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboradComponent } from './pages/user/user-dashborad/user-dashborad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileComponent as UserProfileComponent} from './pages/user/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { TransactionListComponent } from './pages/user/transaction-list/transaction-list.component';
import { ChequeComponent } from './pages/user/cheque/cheque.component';
import { BalanceComponent } from './pages/user/balance/balance.component';
import { TransferComponent } from './pages/user/transfer/transfer.component';
import {MatTableModule} from '@angular/material/table';
import { ChequeApvComponent } from './pages/admin/cheque-apv/cheque-apv.component';
import { UserBlockComponent } from './pages/admin/user-block/user-block.component';
import { GrantTransferComponent } from './pages/admin/grant-transfer/grant-transfer.component';
import { RoleandguideComponent } from './pages/admin/roleandguide/roleandguide.component';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboradComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UserSidebar,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    TransactionListComponent,
    UserProfileComponent,
    ChequeComponent,
    BalanceComponent,
    TransferComponent,
    ChequeApvComponent,
    UserBlockComponent,
    GrantTransferComponent,
    RoleandguideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatTableModule,
    // MatPaginator,
    // MatTableDataSource
  ],
  providers: [authInerceptorProvidors],
  bootstrap: [AppComponent]
})
export class AppModule { }
