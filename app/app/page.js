import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import BookService from "../components/BookService";
import CustomerExperience from "../components/CustomerExperience";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Service />
      <BookService/>
      <CustomerExperience/>
    </div>
  );
}
