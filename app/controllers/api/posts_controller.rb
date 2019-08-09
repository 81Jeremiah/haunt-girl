class Api::CreatorsController < PostsController

  def index
    @posts = Post.all
  end

  def show

  end



end
